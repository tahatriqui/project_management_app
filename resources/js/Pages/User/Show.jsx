import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";
import {
  PROJECT_STATUS_CLASS_MAP,
  PROJECT_STATUS_TEXT_MAP,
} from "@/constant.jsx";
import TasksTable from "../Task/TasksTable";

function Show({ auth, project, tasks, queryParams }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          {`Project '${project.name}'`}
        </h2>
      }
    >
      <Head title={`Project '${project.name}'`} />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div>
              <img
                src={project.image_path}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <div className="grid gap-1 grid-cols-2">
                <div>
                  {/* project id */}
                  <div className="mt-2">
                    <label className="font-bold text-lg">Project Id</label>
                    <p className="mt-1">{project.id}</p>
                  </div>
                  {/* project name */}
                  <div className="mt-4">
                    <label className="font-bold text-lg">Project name</label>
                    <p className="mt-1">{project.name}</p>
                  </div>
                  {/* project status */}
                  <div className="mt-4">
                    <label className="font-bold text-lg">Project Status</label>
                    <p className="mt-1">
                      <span
                        className={
                          "px-2 py-1 rounded text-white " +
                          PROJECT_STATUS_CLASS_MAP[project.status]
                        }
                      >
                        {PROJECT_STATUS_TEXT_MAP[project.status]}
                      </span>
                    </p>
                  </div>
                  {/* created by */}
                  <div className="mt-4">
                    <label className="font-bold text-lg">Created by</label>
                    <p className="mt-1">{project.createdBy.name}</p>
                  </div>
                </div>
                <div>
                  {/* due date */}
                  <div className="mt-4">
                    <label className="font-bold text-lg">Due date</label>
                    <p className="mt-1">{project.due_date}</p>
                  </div>
                  {/* created at */}
                  <div className="mt-4">
                    <label className="font-bold text-lg">Created at</label>
                    <p className="mt-1">{project.created_at}</p>
                  </div>

                  {/* updated by */}
                  <div className="mt-4">
                    <label className="font-bold text-lg">Updated by</label>
                    <p className="mt-1">{project.updatedBy.name}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <label className="font-bold text-lg">project description</label>
                <p className="mt-1">{project.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <TasksTable
                tasks={tasks}
                queryParams={queryParams}
                hideProjectColumn={true}
              />
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}

export default Show;
