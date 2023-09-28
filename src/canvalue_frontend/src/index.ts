import { Actor } from "@dfinity/agent";
import { canvalue_backend } from "../../declarations/canvalue_backend";

const ac = await canvalue_backend.test();
Actor.canisterIdOf(ac.value)
