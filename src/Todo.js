import { Button, List, ListItem, ListItemText, Modal } from "@material-ui/core";
import React from "react";
import "./Todo.css";
import db from "./firebase";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { SettingsPowerRounded } from "@material-ui/icons";

function Todo(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}></Modal>
      <List className="todo_list">
        <ListItem>
          <ListItemText
            primary={props.todo.todo} /*{secondary={props.text}}*/
          />
        </ListItem>
        <button onClick={(e) => setOpen(true)}>Edit</button>
        <DeleteForeverIcon
          onClick={(event) =>
            db.collection("todos").doc(props.todo.id).delete()
          }
        />
      </List>
    </>
  );
}

export default Todo;
