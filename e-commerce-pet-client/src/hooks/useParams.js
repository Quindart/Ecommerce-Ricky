import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

export const useParamsFilter = () => {
    const [searchParams] = useSearchParams();

    const paramsObject = Object.fromEntries(searchParams.entries());

    return paramsObject;
}

export const useSetParamFilter = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);
    const path = location.pathname.split("/page")[0]

    const setParamFilter = (param, value) => {
        searchParams.set(param, value);
        navigate(`${path}?${searchParams.toString()}`);
    };

    const deleteParamFilter = (param) => {
        searchParams.delete(param);
        navigate(`${path}?${searchParams.toString()}`);
    };

    return { setParamFilter, deleteParamFilter };
};


