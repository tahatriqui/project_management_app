import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import React from "react";
import {
  TASK_PRIORITY_CLASS_MAP,
  TASK_PRIORITY_TEXT_MAP,
  TASK_STATUS_CLASS_MAP,
  TASK_STATUS_TEXT_MAP,
} from "@/constant.jsx";
import TasksTable from "../Task/TasksTable";

function Show({ auth, task, tasks, queryParams }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          {`Task '${task.name}'`}
        </h2>
      }
    >
      <Head title={`Task '${task.name}'`} />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div>
              <img src={task.image_path} className="w-full h-64 object-cover" />
            </div>
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <div className="grid gap-1 grid-cols-2">
                <div>
                  {/* task id */}
                  <div className="mt-2">
                    <label className="font-bold text-lg">Task Id</label>
                    <p className="mt-1">{task.id}</p>
                  </div>
                  {/* task name */}
                  <div className="mt-4">
                    <label className="font-bold text-lg">Task name</label>
                    <p className="mt-1">{task.name}</p>
                  </div>
                  {/* task status */}
                  <div className="mt-4">
                    <label className="font-bold text-lg">Task Status</label>
                    <p className="mt-1">
                      <span
                        className={
                          "px-2 py-1 rounded text-white " +
                          TASK_STATUS_CLASS_MAP[task.status]
                        }
                      >
                        {TASK_STATUS_TEXT_MAP[task.status]}
                      </span>
                    </p>
                  </div>
                  {/* task priority */}
                  <div className="mt-4">
                    <label className="font-bold text-lg">Task Priority</label>
                    <p className="mt-1">
                      <span
                        className={
                          "px-2 py-1 rounded text-white " +
                          TASK_PRIORITY_CLASS_MAP[task.priority]
                        }
                      >
                        {TASK_PRIORITY_TEXT_MAP[task.priority]}
                      </span>
                    </p>
                  </div>
                  {/* created by */}
                  <div className="mt-4">
                    <label className="font-bold text-lg">Created by</label>
                    <p className="mt-1">{task.createdBy.name}</p>
                  </div>
                </div>
                <div>
                  {/* due date */}
                  <div className="mt-4">
                    <label className="font-bold text-lg">Due date</label>
                    <p className="mt-1">{task.due_date}</p>
                  </div>
                  {/* created at */}
                  <div className="mt-4">
                    <label className="font-bold text-lg">Created at</label>
                    <p className="mt-1">{task.created_at}</p>
                  </div>
                  {/* PROJECT */}
                  <div className="mt-4">
                    <label className="font-bold text-lg">Project</label>
                    <p className="mt-1">
                      <Link
                        className=" py-2 text-nowrap text-gray-100 hover:underline"
                        href={route("project.show", task.project.id)}
                      >
                        {task.project.name}
                      </Link>
                    </p>
                  </div>
                  {/* description */}
                  <div className="mt-4">
                <label className="font-bold text-lg">task description</label>
                <p className="mt-1">{task.description}</p>
              </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}

export default Show;
