import { ref } from "vue";
import axios from "axios";


export const useGetData = () => {
    const data = ref(null);
    const error = ref(null);
    const loading = ref(true);

    const getData = async (url) => {
        loading.value = true;
        try {
            const res = await axios.get(url);
            data.value = res.data;
    } catch (e) {
        error.value = "error de servidor";
    } finally {
        loading.value = false;
    }
};
    return {
        getData,
        data,
        loading,
        error,
    }
};