import {createContext, useContext, useState, ReactNode} from 'react';

const SortFilterContext = createContext<sortFilterContextType | undefined>(
  undefined,
);

export const useSortFilterContext = () => {
  const context = useContext(SortFilterContext);
  if (!context) {
    throw new Error(
      'usesortFilterContext must be used within an sortFilterProvider',
    );
  }
  return context;
};

export const SortFilterProvider: React.FC<{children: ReactNode}> = ({
  children,
}) => {
  const [sortPreference, setSortPreference] = useState({
    label: 'Date',
    value: 'date',
  });
  const [filterUpcoming, setFilterUpcoming] = useState<boolean>(false);
  const [use24HourClock, setUse24HourClock] = useState(false);
  const [dateFormat, setDateFormat] = useState({
    label: 'DD/MM/YY',
    value: 'DD/MM/YY',
  });

  return (
    <SortFilterContext.Provider
      value={{
        sortPreference,
        setSortPreference,
        filterUpcoming,
        setFilterUpcoming,
        use24HourClock,
        setUse24HourClock,
        dateFormat,
        setDateFormat,
      }}>
      {children}
    </SortFilterContext.Provider>
  );
};
