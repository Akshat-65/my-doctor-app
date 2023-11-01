import Pagination from "@mui/material/Pagination";

const paginationStyles = {
  display: "flex",
  mt: "16px",
  justifyContent: "center",
  mb: "10px",
};

const CustomPagination = ({ onChange, count, page }) => {
  return (
    <Pagination
      sx={paginationStyles}
      size="small"
      count={count}
      page={page}
      onChange={onChange}
      variant="outlined"
      color="primary"
    />
  );
};

export default CustomPagination;
