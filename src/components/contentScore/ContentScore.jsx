import React from 'react'

const ContentScore = ( {score, index, indexC} ) => {
    return (
        <>
            <div className={`flex items-center justify-center w-76 h-[3.6rem] ${indexC === index ? "bg-[#FFA1F18F] w-10/12 rounded-xl border-4 border-white":''}`}>
                {score}
            </div>
        </>
    )
}

export default ContentScore

