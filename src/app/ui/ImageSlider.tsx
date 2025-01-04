'use client'
import React, { useRef } from 'react';
const ImageSlider = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);

  // Typing for isDragging and offset
  const isDragging = useRef<boolean>(false);
  const offset = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isDragging.current = true;

    // Type assertion is needed to ensure `boxRef.current` is not null
    const box = boxRef.current?.getBoundingClientRect();
    if (!box) return;

    offset.current = {
      x: e.clientX - box.left,
      y: e.clientY - box.top
    };
  };
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current || !boxRef.current) return;

    const left = e.clientX - offset.current.x;
    const top = e.clientY - offset.current.y;

    // Style properties must be set as strings
    boxRef.current.style.left = `${left}px`;
    boxRef.current.style.top = `${top}px`;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };
  return (
    <div className="w-full h-[500px] bg-white relative m-2 p-3 box-border">
      <div className="absolute w-full h-full top-0 left-0 box-border p-3">
        hello
      </div>
      <div
        ref={boxRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        className='w-5 h-5 bg-red-700 absolute top-10 left-10 cursor-grab z-10'
      />
      <div className="absolute w-full h-full top-0 left-0 box-border p-3">
        hi
      </div>
    </div>
  )
}

/* <div className="absolute top-0 h-full w-2 bg-black">
  <div className="h-7 min-w-7 rounded-full bg-red-700 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
</div> */
export default ImageSlider;

/* function DraggableBox() {

  return (
    <div
      ref={boxRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: '#3498db',
        position: 'absolute',
        top: '50px',
        left: '50px',
        cursor: 'grab',
      }}
    />
  );
}

export default DraggableBox; */
