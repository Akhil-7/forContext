import React from "react";

const ContextB=React.createContext();

const UserProvider=ContextB.Provider;
const UserConsumer=ContextB.Consumer;

export {UserProvider,UserConsumer}