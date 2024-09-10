<?php

namespace App\Http\Controllers;

use App\Http\Resources\TaskResource;
use App\Models\Task;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {

        $user = auth()->user();
        $TotalPendingTasks = Task::query()->where("status", "pending")->count();
        $MyPendingTasks = Task::query()->where("status", "pending")->where('assigned_user_id', $user->id)->count();

        $TotalProgressTasks = Task::query()->where("status", "in_progress")->count();
        $MyProgressTasks = Task::query()->where("status", "in_progress")->where('assigned_user_id', $user->id)->count();

        $TotalCompletedTasks = Task::query()->where("status", "completed")->count();
        $MyCompletedTasks = Task::query()->where("status", "completed")->where('assigned_user_id', $user->id)->count();

        $activeTasks = Task::query()->whereIn("status",['pending','in_progress'])->where('assigned_user_id', $user->id)->limit(10)->get();
        $activeTasks  = TaskResource::collection($activeTasks);
        return inertia('Dashboard', compact(
            'TotalPendingTasks',
            'MyPendingTasks',
            'TotalProgressTasks',
            "MyProgressTasks",
            "TotalCompletedTasks",
            "MyCompletedTasks",
            'activeTasks'
        ));
    }
}
