import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/modules/app.module.scss";
import { updateFilterStatus } from "../slices/todoSlice";
import Button, { SelectButton } from "./Button";
import { RootState } from "./AppContent";
import TodoModal from "./TodoModal";

function AppHeader() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const initialFilterStatus = useSelector(
    (state: RootState) => state.todo.filterStatus
  );
  const [filterStatus, setFilterStatus] = useState(initialFilterStatus);
  const dispatch = useDispatch();

  const updateFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterStatus(e.target.value);
    dispatch(updateFilterStatus(e.target.value));
  };

  return (
    <div className={styles.appHeader}>
      <Button variant="primary" onClick={() => setModalOpen(true)}>
        Add Task
      </Button>
      <SelectButton
        id="status"
        onChange={(e) => updateFilter(e)}
        value={filterStatus}
      >
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Completed</option>
      </SelectButton>
      <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

export default AppHeader;
