// import React from 'react';


// function Calendar({ currentDate, tasks, onSelectDate, setCurrentDate }) {
//   const currentMonth = currentDate.getMonth();
//   const currentYear = currentDate.getFullYear();

//   const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
//   const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

//   const prevMonth = () => {
//     let newDate = new Date(currentDate.setMonth(currentDate.getMonth() - 1));
//     setCurrentDate(newDate);
//   };

//   const nextMonth = () => {
//     let newDate = new Date(currentDate.setMonth(currentDate.getMonth() + 1));
//     setCurrentDate(newDate);
//   };

//   const handleDayClick = (day) => {
//     const date = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
//     const task = tasks[date] || { task: 'No task assigned', status: 'undone' };
//     onSelectDate(date, task);
//   };

//   return (
//     <div className="calendar-container">
//       <div className="calendar-header">
//         <button onClick={prevMonth}>&lt;</button>
//         <span>{new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} {currentYear}</span>
//         <button onClick={nextMonth}>&gt;</button>
//       </div>

//       <div className="calendar">
//         {Array.from({ length: firstDayOfMonth }, (_, index) => (
//           <div key={index} className="empty"></div>
//         ))}
//         {Array.from({ length: daysInMonth }, (_, index) => {
//           const day = index + 1;
//           const date = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
//           const task = tasks[date];

//           // Apply background color based on task status
//           const statusClass = task
//             ? task.status === 'done'
//               ? 'background-green'
//               : task.status === 'in-progress'
//               ? 'background-yellow'
//               : 'background-red'
//             : 'background-gray';

//           return (
//             <div
//               key={day}
//               className={`day ${statusClass}`}
//               onClick={() => handleDayClick(day)}
//             >
//               {day}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Calendar;

import React from 'react';// Ensure this is the correct path to your CSS file

function Calendar({ currentDate, tasks, onSelectDate, setCurrentDate }) {
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const prevMonth = () => {
    let newDate = new Date(currentDate.setMonth(currentDate.getMonth() - 1));
    setCurrentDate(newDate);
  };

  const nextMonth = () => {
    let newDate = new Date(currentDate.setMonth(currentDate.getMonth() + 1));
    setCurrentDate(newDate);
  };

  const handleDayClick = (day) => {
    const date = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const task = tasks[date] || { task: 'No task assigned', status: 'undone' };
    onSelectDate(date, task);
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={prevMonth}>&lt;</button>
        <span>{new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} {currentYear}</span>
        <button onClick={nextMonth}>&gt;</button>
      </div>

      <div className="calendar">
        {Array.from({ length: firstDayOfMonth }, (_, index) => (
          <div key={index} className="empty"></div>
        ))}
        {Array.from({ length: daysInMonth }, (_, index) => {
          const day = index + 1;
          const date = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
          const task = tasks[date];

          // Apply background color based on task status
          const statusClass = task
            ? task.status === 'done'
              ? 'background-green'
              : task.status === 'in-progress'
              ? 'background-yellow'
              : 'background-red'
            : 'background-gray';

          return (
            <div
              key={day}
              className={`day ${statusClass}`}
              onClick={() => handleDayClick(day)}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Calendar;
