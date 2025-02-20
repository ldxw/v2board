<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\Admin\UserUpdate;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\User;
use App\Models\Plan;

class UserController extends Controller
{
    public function fetch(Request $request)
    {
        $current = $request->input('current') ? $request->input('current') : 1;
        $pageSize = $request->input('pageSize') >= 10 ? $request->input('pageSize') : 10;
        $userModel = User::orderBy('created_at', 'DESC');
        if ($request->input('email')) {
            $userModel->where('email', $request->input('email'));
        }
        $total = $userModel->count();
        $res = $userModel->forPage($current, $pageSize)
            ->get();
        $plan = Plan::get();
        for ($i = 0; $i < count($res); $i++) {
            for ($k = 0; $k < count($plan); $k++) {
                if ($plan[$k]['id'] == $res[$i]['plan_id']) {
                    $res[$i]['plan_name'] = $plan[$k]['name'];
                }
            }
        }
        return response([
            'data' => $res,
            'total' => $total
        ]);
    }

    public function getUserInfoById(Request $request)
    {
        if (empty($request->input('id'))) {
            abort(500, '参数错误');
        }
        return response([
            'data' => User::select([
                'email',
                'u',
                'd',
                'transfer_enable',
                'expired_at'
            ])->find($request->input('id'))
        ]);
    }

    public function update(UserUpdate $request)
    {
        $updateData = $request->only([
            'email',
            'password',
            'transfer_enable',
            'expired_at',
            'banned',
            'plan_id',
            'commission_rate',
            'is_admin'
        ]);
        $user = User::find($request->input('id'));
        if (!$user) {
            abort(500, '用户不存在');
        }
        if (User::where('email', $updateData['email'])->first() && $user->email !== $updateData['email']) {
            abort(500, '邮箱已被使用');
        }
        if (isset($updateData['password'])) {
            $updateData['password'] = password_hash($updateData['password'], PASSWORD_DEFAULT);
        } else {
            unset($updateData['password']);
        }
        $updateData['transfer_enable'] = $updateData['transfer_enable'] * 1073741824;
        if (isset($updateData['plan_id'])) {
            $plan = Plan::find($updateData['plan_id']);
            if (!$plan) {
                abort(500, '订阅计划不存在');
            }
            $updateData['group_id'] = $plan->group_id;
        }
        if (!$user->update($updateData)) {
            abort(500, '保存失败');
        }
        return response([
            'data' => true
        ]);
    }
}
