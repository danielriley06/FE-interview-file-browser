import { InMemoryCache, makeVar } from "@apollo/client";
import { WhereInput } from "../generated-api";

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        directoryFilters: {
          read() {
            return directoryFilterVar();
          },
        },
      },
    },
  },
});

// init filter var

const initialDirectoryFilter = {
  size_gt: 0, // min file size
  size_lt: 0, // max file size
  name_contains: "",
  type_eq: "",
};

export const directoryFilterVar = makeVar<WhereInput>(initialDirectoryFilter);

// handle filter updates

export const sendFilterEvent = (payload?: WhereInput) => {
  directoryFilterVar({
    ...directoryFilterVar(),
    ...payload,
  });
};

// reset filter to default values

export const resetDirectoryFilter = () => {
  directoryFilterVar(initialDirectoryFilter);
};
