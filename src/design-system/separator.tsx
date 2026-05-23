import * as React from "react"

function Separator({ className, ...props }: React.ComponentProps<"hr">) {
  return (
    <hr
      className={className}
      {...props}
    />
  )
}

export { Separator }
