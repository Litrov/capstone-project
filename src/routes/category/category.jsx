import {Fragment, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import './category.styles';
import ProductCard from "../../components/product-card/Product-card";
import {useSelector} from "react-redux";
import {selectCategoriesMap, selectIsLoading} from "../../store/categories/category.selector";
import Spinner from "../../components/spinner/spinner";
import {CategoryContainer, Title} from "./category.styles";

const Category = () => {
    const {category} = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectIsLoading);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <Title>{category.toUpperCase()}</Title>
            {isLoading ? (
                <Spinner/>
            ) : (
                <CategoryContainer>
                    {products &&
                        products.map((product) => (
                            <ProductCard key={product.id} product={product}/>
                        ))}
                </CategoryContainer>
            )}
        </Fragment>
    );
};

export default Category;