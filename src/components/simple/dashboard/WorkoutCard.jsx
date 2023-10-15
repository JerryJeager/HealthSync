import PropTypes from 'prop-types';

const WorkoutCard = ({ day, name, date }) => {
  const currentDate = new Date();

  return (
    <div
      className={`flex gap-2 text-lg p-3 shadow-md place-items-center rounded-md cursor-pointer hover:shadow-lg ${
        date.toDateString() === currentDate.toDateString()
          ? 'bg-green text-white'
          : date < currentDate
          ? 'bg-slate-200'
          : 'bg-white'
      }`}
    >
      <p className="rounded-full p-3 border border-slate-300">{day}</p>
      <p className="font-semibold">{name}</p>

      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fal"
        data-icon="medal"
        className="ml-auto h-6 w-6"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
      >
        <path
          fill="currentColor"
          d="M332.37 275.41l-19.75-40.05c-9.44-18.81-39.91-18.86-49.28.08l-19.72 39.97-44.06 6.44c-10.44 1.5-18.94 8.67-22.22 18.7-3.25 10.02-.59 20.83 6.97 28.17l31.91 31.09-7.56 43.92c-3.91 22.74 20.25 39.5 39.87 28.97L288 411.97l39.44 20.72c19.35 10.13 43.87-5.88 39.91-28.95l-7.56-43.92 31.91-31.09c7.56-7.34 10.22-18.16 6.97-28.17-3.28-10.03-11.78-17.19-22.19-18.7l-44.11-6.45zm-6.96 73.25l8.84 51.45-46.25-24.3-46.34 24.91 8.94-52.06-37.41-36.47 51.69-7.53L288 257.78l23.12 46.88 51.69 7.53-37.4 36.47zM559.97 0H402.12c-11.24 0-21.66 5.9-27.44 15.54L288 160 201.32 15.54A31.997 31.997 0 0 0 173.88 0H16.03C3.08 0-4.5 14.57 2.92 25.18l144.12 205.88C125.14 260.4 112 296.65 112 336c0 97.05 78.95 176 176 176s176-78.95 176-176c0-39.35-13.14-75.6-35.04-104.94L573.08 25.18C580.5 14.57 572.92 0 559.97 0zM46.76 32h127.12l78.93 131.55c-31.95 6.51-60.65 21.84-83.78 43.13L46.76 32zM432 336c0 79.53-64.47 144-144 144s-144-64.47-144-144 64.47-144 144-144 144 64.47 144 144zm-25.03-129.32c-23.13-21.29-51.83-36.62-83.78-43.13L402.12 32h127.12L406.97 206.68z"
        ></path>
      </svg>
    </div>
  );
};

WorkoutCard.propTypes = {
  day: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
};

export default WorkoutCard;
