"use client"

import { useEffect, useState } from "react";
import Modal from "./Modal";
import CreateTask from "./CreateTask";
import useCaseCalls from "@/hooks/useCaseCalls";
import { useSelector } from "react-redux";
import { FaFlag } from "react-icons/fa6";

const Card = ({ item }) => {
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const { flags } = useSelector((state) => state.case);

  const flagColor = flags.map((flag) => flag.color);

  const { getFlags } = useCaseCalls();

  useEffect(() => {
    getFlags();
  }, []);

  return (
    <article className="rounded-xl border border-gray-300 p-1 flex-1 relative">
      <div className="flex items-center gap-4">
        <div>
          <h3 className="text-lg font-medium p-2 text-blue-main">
            {item.name}
          </h3>
        </div>
      </div>

      <ul className="mt-4 space-y-2 max-h-80 overflow-y-auto">
        {item.tasks.map((task) => (
          <li
            key={task.id}
            onClick={() => {
              setSelectedTask(task);
              setShowModal(true);
            }}
            className="cursor-pointer"
          >
            <div className="border p-2 rounded-md">
              <strong className="font-medium">{task.name}</strong>
              <p className="mt-1 text-xs font-medium">{task.description}</p>
              <p className="text-sm text-gray-400">
                {new Date(task.updatedAt).toLocaleString()}
              </p>

              {flagColor[Number(task.flagId) - 1] && (
                <div className="flex justify-start items-center gap-x-2">
                  <p className="text-sm text-gray-400">Milestone Name</p>
                  <FaFlag
                    style={{ color: flagColor[Number(task.flagId) - 1] }}
                  />
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>

      {selectedTask && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          task={selectedTask}
        />
      )}

      {item.name === "Open" && (
        <div className="absolute bottom-2 right-2">
          <button
            onClick={() => setOpen(true)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            New Task
          </button>
          <CreateTask open={open} setOpen={setOpen} />
        </div>
      )}
    </article>
  );
};

export default Card;
