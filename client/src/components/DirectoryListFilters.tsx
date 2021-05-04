import Box from "@material-ui/core/Box";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { WhereInput } from "../generated-api";
export interface DirectoryListFiltersProps {
  currentTypeFilter?: string;
  currentNameFilter?: string;
  currentMinSize?: number;
  currentMaxSize?: number;
  sendFilterEvent: (filterEvent?: WhereInput) => void;
}

const DirectoryListFilters = ({
  currentTypeFilter,
  currentNameFilter,
  sendFilterEvent,
}: DirectoryListFiltersProps) => {
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    sendFilterEvent({ name_contains: event.target.value });
  };

  const handleTypeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    sendFilterEvent({ type_eq: event.target.value as string });
  };
  return (
    <Toolbar>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <Typography variant="h6">File Browser</Typography>
        <Box>
          <TextField
            label="Search"
            value={currentNameFilter}
            onChange={handleNameChange}
            size="small"
            margin="normal"
          />
          <TextField
            label="Type"
            name="type_eq"
            value={currentTypeFilter}
            onChange={handleTypeChange}
            size="small"
            margin="normal"
            style={{
              width: "10ch",
              marginLeft: "2ch",
            }}
            select
          >
            <MenuItem value={""}>Any</MenuItem>
            <MenuItem value={"Directory"}>Directories</MenuItem>
            <MenuItem value={"File"}>Files</MenuItem>
          </TextField>
        </Box>
      </Box>
    </Toolbar>
  );
};

export default DirectoryListFilters;
