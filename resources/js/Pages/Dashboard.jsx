import { TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP } from "@/constant";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard({ auth, TotalPendingTasks, MyPendingTasks ,TotalProgressTasks,
  MyProgressTasks,
  TotalCompletedTasks,
  MyCompletedTasks,
  activeTasks}) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Dashboard
        </h2>
      }
    >
      <Head title="Dashboard" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 grid grid-cols-3 gap-2">
          {/* pending tasks */}
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <h3 className="text-amber-600 font-semibold text-xl">
                Pending tasks
              </h3>
              <p className="text-xl">
                <span className="mr-2">{MyPendingTasks}</span>/
                <span className="ml-2">{TotalPendingTasks}</span>
              </p>
            </div>
          </div>
          {/* in progress tasks */}
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <h3 className="text-blue-500 font-semibold text-xl">
                in progress tasks
              </h3>
              <p className="text-xl">
                <span className="mr-2">{MyProgressTasks}</span>/
                <span className="ml-2">{TotalProgressTasks}</span>
              </p>
            </div>
          </div>
          {/* Completed tasks */}
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <h3 className="text-green-500 font-semibold text-xl">
              Completed tasks
              </h3>
              <p className="text-xl">
                <span className="mr-2">{MyCompletedTasks}</span>/
                <span className="ml-2">{TotalCompletedTasks}</span>
              </p>
            </div>
          </div>

        </div>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-4">
         {/* content */}
         <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
         <div className="p-6 text-gray-900 dark:text-gray-100">
         <h3 className="text-gray-200 font-semibold text-xl">
                My active task
              </h3>
              <table className="mt-3 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                  <tr>
                    <th className="px-3 py-3">ID</th>
                    <th className="px-3 py-3">Project Name</th>
                    <th className="px-3 py-3">Name</th>
                    <th className="px-3 py-3">Status</th>
                    <th className="px-3 py-3">Due Date</th>
                  </tr>
                </thead>
                <tbody>
                  {activeTasks.data.map((task) => (
                    <tr key={task.id}>
                      <td className="px-3 py-2">{task.id}</td>
                      <td className="px-3 py-2 text-white hover:underline">
                        <Link href={route("project.show", task.project.id)}>
                          {task.project.name}
                        </Link>
                      </td>
                      <td className="px-3 py-2 text-white hover:underline">
                        <Link href={route("task.show", task.id)}>
                          {task.name}
                        </Link>
                      </td>
                      <td className="px-3 py-2">
                        <span
                          className={
                            "px-2 py-1 rounded text-nowrap text-white " +
                            TASK_STATUS_CLASS_MAP[task.status]
                          }
                        >
                          {TASK_STATUS_TEXT_MAP[task.status]}
                        </span>
                      </td>
                      <td className="px-3 py-2 text-nowrap">{task.due_date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            </div>
          </div>
      </div>
    </AuthenticatedLayout>
  );
}
