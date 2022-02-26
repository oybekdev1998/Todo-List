import React from "react"

export const Loader = () => {
  return (
    <div className="text-center">
      <div className="spinner-border m-5" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}