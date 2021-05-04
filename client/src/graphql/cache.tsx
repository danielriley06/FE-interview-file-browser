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

export const directoryFilterVar = makeVar<WhereInput>({
  size_gt: 0, // min file size
  size_lt: 0, // max file size
  name_contains: "",
  type_eq: "",
});

// handle filter updates

export const sendFilterEvent = (payload?: WhereInput) => {
  directoryFilterVar({
    ...directoryFilterVar(),
    ...payload,
  });
};
