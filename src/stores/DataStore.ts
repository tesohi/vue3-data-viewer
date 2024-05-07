import { defineStore, storeToRefs } from "pinia";
import { Ref, ref } from "vue";

export type DataPoint = [number, number];

export interface DataSet {
  id: number;
  name: string;
  data: DataPoint[];
}

export interface DataContainer {
  has_data: boolean;
  data: DataSet[];
}

export const useDataStore = defineStore("data", () => {
  const data: Ref<DataSet[]> = ref([]);
  const hasData: Ref<boolean> = ref(false);
  const isLoading: Ref<boolean> = ref(false);

  async function fetchData(): Promise<void> {
    try {
      isLoading.value = true;

      const response = await fetch("/mock.json");
      const jsonData: DataContainer = await response.json();

      data.value = jsonData.data;
      hasData.value = jsonData.has_data;
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false;
    }
  }

  return { data, hasData, isLoading, fetchData };
});

export const useDataStoreRefs = () => storeToRefs(useDataStore());
