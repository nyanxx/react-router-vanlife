import type { Server, Registry } from "miragejs";
import type { AnyFactories, AnyModels } from "miragejs/-types";

export type MirageServer = Server<Registry<AnyModels, AnyFactories>>;