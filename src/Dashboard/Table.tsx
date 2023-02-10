


const TableRow = () => {
  return (
    <tr className="hover:bg-gray-50">
      <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
        <div className="relative h-10 w-10">
          <img
            className="h-full w-full rounded-full object-cover object-center"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
        </div>
        <div className="text-sm">
          <div className="font-medium text-gray-700">Steven Jobs</div>
          <div className="text-gray-400">jobs@sailboatui.com</div>
        </div>
      </th>
      <td className="px-6 py-4">
        <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
          <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
          Active
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-red-600">
          <span className="h-1.5 w-1.5 rounded-full bg-red-600"></span>
          unActive
        </span>
        
      </td>
      <td className="px-6 py-4">Product Designer</td>
      <td className="px-6 py-4">
        <div className="flex gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
            Design
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
            Product
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600">
            Develop
          </span>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex justify-end gap-4">
          <a x-data="{ tooltip: 'Delete' }" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
              x-tooltip="tooltip"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </a>
          <a x-data="{ tooltip: 'Edite' }" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
              x-tooltip="tooltip"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>
          </a>
        </div>
      </td>
    </tr>
  );
};

const tyittles = ["Name", " State", "Role", "Team", ""];
const TableHead = ({ tableTittles }: { tableTittles: string[] }) => {
  return (
    <thead className="bg-gray-50">
      <tr>
        {tableTittles.map((elem) => {
          return (
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              {elem}
            </th>
          );
        })}
        
      </tr>
    </thead>
  );
};

const ProjectRow = () => {
  return (
    <tr className="hover:bg-gray-50">
      <td className="py-4 px-6 text-left">
        <div className="flex items-center">
          <div className="mr-2">
            <img alt="on team"
              className="w-6 h-6"
              src="https://img.icons8.com/color/48/000000/php.png"
            />
          </div>
          <span className="font-medium">js Project</span>
        </div>
      </td>
      <td className="py-4 px-6 text-left">
        <div className="flex items-center">
          <div className="mr-2">
            <img alt="on team"
              className="w-6 h-6 rounded-full"
              src="https://randomuser.me/api/portraits/lego/3.jpg"
            />
          </div>
          <span>A.Alqasasa</span>
        </div>
      </td>
      <td className="py-4 px-6 text-center">
        <div className="flex items-center justify-center">
          <img alt="on team"
            className="w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125"
            src="https://randomuser.me/api/portraits/men/2.jpg"
          />
          <img alt="on team"
            className="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125"
            src="https://randomuser.me/api/portraits/women/3.jpg"
          />
          <img alt="on team"
            className="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125"
            src="https://randomuser.me/api/portraits/men/5.jpg"
          />
        </div>
      </td>
      <td className="py-4 px-6 text-center">
        <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
          Completed
        </span>
      </td>
      <td className="py-4 px-6 text-center">
        <div className="flex item-center justify-center">
          <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </div>
          <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </div>
          <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </div>
        </div>
      </td>
    </tr>
  );
};
const project = ["Project", "Client", "Users", "Status", "Actions"];
const Table = ({ tableType }: { tableType: string }) => {
  return (
    <div className="overflow-scroll rounded-lg border border-gray-200 shadow-md m-5">
      <table className="w-full overflow-scroll border-collapse bg-white text-left text-sm text-gray-500">
        {tableType === "users" && <TableHead tableTittles={tyittles} />}
        {tableType === "projects" && <TableHead tableTittles={project} />}
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {[1, 2, 3, 1, 2, 3, 1, 2, 3].map((elem) => (
            <>
              {tableType === "users" && <TableRow />}
              {tableType === "projects" && <ProjectRow />}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
