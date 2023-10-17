import { useDispatch, useSelector } from "react-redux";
import {
    setCategorieTopic,
    setCategorieFilter,
    setLoading
} from "../store/categories/categoriesSlice"

export const useCategoriesStore = () => {
    const dispatch = useDispatch()
    const {
        categorieTopic,
        categorieFilter,
        loading
    } = useSelector((state) => state.categories)

    const handleSetCategorieTopic = (topic) => {
        dispatch(setCategorieTopic(topic))
    }

    const handleSetCategorieFilter = (filter) => {
        dispatch(setCategorieFilter(filter))
    }

    const handleLoading = (bool) => {
        dispatch(setLoading(bool))
    }

    return {
        handleSetCategorieTopic,
        handleSetCategorieFilter,
        handleLoading,
        /* States */
        categorieTopic,
        categorieFilter,
        loading
    }
}