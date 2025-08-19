import { DayPicker } from "react-day-picker"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

function CustomCaption(props: any) {
  return (
    <div className="flex items-center justify-between px-2">
      <button
        onClick={() => props?.onPrevClick?.()}
        disabled={!props?.onPrevClick}
      >
        <ChevronLeftIcon className="h-4 w-4" />
      </button>
      <span>
        {props.displayMonth.toLocaleDateString("default", {
          month: "long",
          year: "numeric",
        })}
      </span>
      <button
        onClick={() => props?.onNextClick?.()}
        disabled={!props?.onNextClick}
      >
        <ChevronRightIcon className="h-4 w-4" />
      </button>
    </div>
  )
}
