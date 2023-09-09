import * as Zmq from "zeromq"
import type { Service } from "./Service"
import { brokerListen } from "./brokerListen"

export type Broker = {
  backend: Zmq.Router
  services: Map<string, Service>
}

export function createBroker(): Broker {
  const broker = {
    backend: new Zmq.Router({ sendHighWaterMark: 1 }),
    services: new Map(),
  }

  brokerListen(broker)

  // for (const eventType of eventTypes()) {
  //   broker.backend.events.on(eventType, (event) => {
  //     console.log({ who: "broker", event })
  //   })
  // }

  return broker
}
