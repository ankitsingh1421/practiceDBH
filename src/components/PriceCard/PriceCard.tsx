import React from "react";

interface PriceCardProps {
    price: number;
    originalPrice: number;
    discount: string;
    currency: string;
}

const PriceCard: React.FC<PriceCardProps> = ({ price, originalPrice, discount, currency }) => {
    return (
        <div className="bg-blur p-6 rounded-lg shadow-md w-80   " style={{ marginLeft: '100px' }}>
            <div className="text-sm text-gray-200 uppercase mb-2">Price</div>
            <div className="flex items-center space-x-2">
                <span className="text-3xl font-bold text-white">{currency}{price}</span>
                <span className="text-gray-400 line-through text-lg">{currency}{originalPrice}</span>
                <span className="text-green-600 text-xl font-semibold">{discount} off</span>
            </div>

        </div>
    );
};

export default PriceCard;
