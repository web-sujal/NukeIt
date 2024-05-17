import useCreateTaskModal from "@/hooks/useCreateTaskModal";

import Modal from "./Modal";

const CreateTaskModal = () => {
  const { isOpen, onClose } = useCreateTaskModal();

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onChange={onChange}
      title="Create Task"
      description="What's on your mind."
    >
      <div className="">Test Text</div>
    </Modal>
  );
};

export default CreateTaskModal;
