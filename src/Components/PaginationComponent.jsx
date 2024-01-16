// PaginationComponent.jsx

// // PaginationComponent.jsx
// import { ButtonGroup, Button } from '@mui/material';
// import Pagination from '@mui/material/Pagination';

// const PaginationComponent = ({ pagination, onPageChange }) => {
//   const handlePageChange = (direction) => {
//     onPageChange(direction);
//   };

//   return (
//     <ButtonGroup color="primary">
//       <Button onClick={() => handlePageChange('previous')}>Previous</Button>
//       <Button onClick={() => handlePageChange('next')}>Next</Button>
//       {pagination && (
//         <Pagination
//           count={pagination.pageCount}
//           page={pagination.page}
//           onChange={(event, value) => onPageChange(value)}
//         />
//       )}
//     </ButtonGroup>
//   );
// };

// export default PaginationComponent;
