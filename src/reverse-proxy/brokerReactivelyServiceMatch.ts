import { watch } from "@vue/runtime-core"
import type { Broker } from "./Broker"
import type { Service } from "./Service"
import { brokerServiceMatch } from "./brokerServiceMatch"

export function brokerReactivelyServiceMatch(broker: Broker, service: Service) {
  watch(
    () => service.workerIds.length,
    () => {
      brokerServiceMatch(broker, service)
    },
  )
  watch(
    () => service.requests.length,
    () => {
      brokerServiceMatch(broker, service)
    },
  )
}
