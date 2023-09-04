export const Snackbar = (
  message: string,
  onClick?: () => void,
  action?: string
) => {
  return (
    <div className="flex justify-between items-center px-[1rem] gap-[1rem]">
      <p className="text-[1rem] font-[400] m-w-[210px] text-[#031201]">
        {message}
      </p>

      {onClick && (
        <button
          className="flex justify-center items-center border-none bg-[none] text-[1rem] font-[400] text-[#031201]"
          onClick={onClick}
        >
          {action}
        </button>
      )}
    </div>
  );
};
