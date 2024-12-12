import React, { useState } from "react";

import { Modal } from "./Modal";
import { Invites } from "./Invites";

import "./style.css";

export const Root: React.FC = () => {
  const [invites, setInvites] = useState<string[]>([]);
  const [opened, setOpened] = useState<boolean>(false);

  const toggle = (opened: boolean): void => {
    setOpened(opened);
  };

  const invite = (name: string): void => {
    if (name.trim()) {
      setInvites((prevInvites) => [...prevInvites, name]);
    }
  };

  return (
    <>
      <div className="button--wrapper">
        <button className="button" onClick={() => toggle(true)}>
          Open invites list
        </button>
      </div>
      <Modal opened={opened} onClose={() => toggle(false)}>
        <Invites
          invites={invites}
          onAdd={(name: string) => {
            invite(name);
          }}
        />
      </Modal>
    </>
  );
};
