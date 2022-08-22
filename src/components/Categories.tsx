import React from 'react';

const Categories = () => {
    const [activeCategories, setActiveCategories] = React.useState(0);
    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

    const onClickCategories = (index: any) => {
        setActiveCategories(index);
    }


    return (
        <div className="categories">
            <ul>
                {categories.map((value, i) => (
                        <li
                            key={i}
                            onClick={() => onClickCategories(i)}
                            className={activeCategories === i ? 'active' : ''}>
                            {value}
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default Categories;