import { DataSet } from "@/stores/DataStore";
import { ColumnHeaders, DataMatrix, RowHeaders } from "../ui/cross-table/types";

export function adaptDataForCrossTable(dataSets: DataSet[]): {
  columnHeaders: ColumnHeaders;
  rowHeaders: RowHeaders;
  data: DataMatrix;
} {
  // Получаем заголовки столбцов из имен датасетов
  const columnHeaders = dataSets.map((dataset) => dataset.name);

  // Предполагаем, что все датасеты имеют одинаковые временные метки и используем первый датасет для заголовков строк
  const rowHeaders = dataSets[0].data.map((point) =>
    new Date(point[0]).toLocaleDateString()
  );

  // Строим матрицу данных, где каждая строка соответствует определенной дате
  const data = rowHeaders.map((_, rowIndex) =>
    dataSets.map((dataset) => dataset.data[rowIndex][1])
  );

  return {
    columnHeaders,
    rowHeaders,
    data,
  };
}
