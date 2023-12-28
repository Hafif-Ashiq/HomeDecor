const Product = {
    "name": null,
    "type": {
        "is_chair": false,
        "is_table": false,
        "is_armchair": false,
        "is_bed": false,
        "is_lamp": false,
    },
    "price": 0,
    "rating": 0.00,
    "quantity": 0,
    "description": null,
    "images": [null, null]
}



const mockProducts = [
    {
        name: 'Elegant Velvet Armchair',
        type: {
            is_chair: false,
            is_table: false,
            is_armchair: true,
            is_bed: false,
            is_lamp: false,
        },
        price: 12000,
        rating: 4.5,
        quantity: 10,
        description: 'Luxurious velvet armchair with a touch of elegance. Perfect for your living space.',
        images: [
            'https://source.unsplash.com/800x600/?velvet-armchair',
            'https://source.unsplash.com/800x600/?velvet-armchair',
        ],
    },
    {
        name: 'Rustic Wooden Dining Table',
        type: {
            is_chair: false,
            is_table: true,
            is_armchair: false,
            is_bed: false,
            is_lamp: false,
        },
        price: 35000,
        rating: 4.8,
        quantity: 8,
        description: 'Solid wood dining table with a rustic charm. Ideal for family gatherings.',
        images: [
            'https://source.unsplash.com/800x600/?rustic-dining-table',
            'https://source.unsplash.com/800x600/?rustic-dining-table',
        ],
    },
    {
        name: 'Comfortable Fabric Sofa Set',
        type: {
            is_chair: false,
            is_table: false,
            is_armchair: true,
            is_bed: false,
            is_lamp: false,
        },
        price: 65000,
        rating: 4.7,
        quantity: 12,
        description: 'Cozy and comfortable fabric sofa set for relaxation and lounging.',
        images: [
            'https://source.unsplash.com/800x600/?fabric-sofa',
            'https://source.unsplash.com/800x600/?fabric-sofa',
        ],
    },
    {
        name: 'Modern Upholstered Bed Frame',
        type: {
            is_chair: false,
            is_table: false,
            is_armchair: false,
            is_bed: true,
            is_lamp: false,
        },
        price: 55000,
        rating: 4.9,
        quantity: 5,
        description: 'Sleek upholstered bed frame for a modern bedroom. Adds style and comfort.',
        images: [
            'https://source.unsplash.com/800x600/?upholstered-bed-frame',
            'https://source.unsplash.com/800x600/?upholstered-bed-frame',
        ],
    },
    {
        name: 'Contemporary Floor Lamp',
        type: {
            is_chair: false,
            is_table: false,
            is_armchair: false,
            is_bed: false,
            is_lamp: true,
        },
        price: 8000,
        rating: 4.6,
        quantity: 15,
        description: 'Minimalist floor lamp with a contemporary design. Enhances ambient lighting.',
        images: [
            'https://source.unsplash.com/800x600/?floor-lamp',
            'https://source.unsplash.com/800x600/?floor-lamp',
        ],
    },

    {
        name: 'Leather Recliner Chair',
        type: {
            is_chair: true,
            is_table: false,
            is_armchair: false,
            is_bed: false,
            is_lamp: false,
        },
        price: 22000,
        rating: 4.6,
        quantity: 9,
        description: 'Premium leather recliner chair for ultimate relaxation. Stylish and comfortable.',
        images: [
            'https://source.unsplash.com/800x600/?leather-recliner',
            'https://source.unsplash.com/800x600/?leather-recliner',
        ],
    },
    {
        name: 'Glass Top Center Table',
        type: {
            is_chair: false,
            is_table: true,
            is_armchair: false,
            is_bed: false,
            is_lamp: false,
        },
        price: 18000,
        rating: 4.7,
        quantity: 7,
        description: 'Elegant glass top center table for your living room. Adds sophistication to your decor.',
        images: [
            'https://source.unsplash.com/800x600/?glass-center-table',
            'https://source.unsplash.com/800x600/?glass-center-table',
        ],
    },
    {
        name: 'Vintage Armchair',
        type: {
            is_chair: false,
            is_table: false,
            is_armchair: true,
            is_bed: false,
            is_lamp: false,
        },
        price: 18000,
        rating: 4.8,
        quantity: 12,
        description: 'Charming vintage armchair with classic design. Perfect for a cozy corner.',
        images: [
            'https://source.unsplash.com/800x600/?vintage-armchair',
            'https://source.unsplash.com/800x600/?vintage-armchair',
        ],
    },
    {
        name: 'Queen Size Metal Bed Frame',
        type: {
            is_chair: false,
            is_table: false,
            is_armchair: false,
            is_bed: true,
            is_lamp: false,
        },
        price: 32000,
        rating: 4.9,
        quantity: 5,
        description: 'Sturdy metal bed frame for a queen-size mattress. Modern and durable design.',
        images: [
            'https://source.unsplash.com/800x600/?metal-bed-frame',
            'https://source.unsplash.com/800x600/?metal-bed-frame',
        ],
    },
    {
        name: 'Modern Pendant Ceiling Lamp',
        type: {
            is_chair: false,
            is_table: false,
            is_armchair: false,
            is_bed: false,
            is_lamp: true,
        },
        price: 12000,
        rating: 4.7,
        quantity: 8,
        description: 'Sleek pendant ceiling lamp for contemporary interiors. Enhances ambient lighting.',
        images: [
            'https://source.unsplash.com/800x600/?ceiling-lamp',
            'https://source.unsplash.com/800x600/?ceiling-lamp',
        ],
    },
    {
        name: 'Wooden Rocking Chair',
        type: {
            is_chair: true,
            is_table: false,
            is_armchair: false,
            is_bed: false,
            is_lamp: false,
        },
        price: 15000,
        rating: 4.5,
        quantity: 11,
        description: 'Classic wooden rocking chair for relaxation and comfort. A timeless addition to any home.',
        images: [
            'https://source.unsplash.com/800x600/?wooden-rocking-chair',
            'https://source.unsplash.com/800x600/?wooden-rocking-chair',
        ],
    },
    {
        name: 'Vintage Wooden Side Table',
        type: {
            is_chair: false,
            is_table: true,
            is_armchair: false,
            is_bed: false,
            is_lamp: false,
        },
        price: 8000,
        rating: 4.6,
        quantity: 14,
        description: 'Charming vintage-style wooden side table. Ideal for placing beside your couch or bed.',
        images: [
            'https://source.unsplash.com/800x600/?wooden-side-table',
            'https://source.unsplash.com/800x600/?wooden-side-table',
        ],
    },
    {
        name: 'Tufted Upholstered Ottoman',
        type: {
            is_chair: false,
            is_table: false,
            is_armchair: true,
            is_bed: false,
            is_lamp: false,
        },
        price: 9000,
        rating: 4.7,
        quantity: 9,
        description: 'Elegant tufted upholstered ottoman. Versatile and perfect for adding extra seating.',
        images: [
            'https://source.unsplash.com/800x600/?upholstered-ottoman',
            'https://source.unsplash.com/800x600/?upholstered-ottoman',
        ],
    },
    {
        name: 'Rustic Hanging Pendant Light',
        type: {
            is_chair: false,
            is_table: false,
            is_armchair: false,
            is_bed: false,
            is_lamp: true,
        },
        price: 7000,
        rating: 4.8,
        quantity: 10,
        description: 'Rustic-style hanging pendant light fixture. Adds a warm ambiance to any room.',
        images: [
            'https://source.unsplash.com/800x600/?hanging-pendant-light',
            'https://source.unsplash.com/800x600/?hanging-pendant-light',
        ],
    },
    {
        name: 'Linen Upholstered Armchair',
        type: {
            is_chair: false,
            is_table: false,
            is_armchair: true,
            is_bed: false,
            is_lamp: false,
        },
        price: 12000,
        rating: 4.6,
        quantity: 12,
        description: 'Comfortable linen upholstered armchair for cozy relaxation. Stylish and inviting.',
        images: [
            'https://source.unsplash.com/800x600/?linen-armchair',
            'https://source.unsplash.com/800x600/?linen-armchair',
        ],
    },
];











const NotificationModel = {
    description: "",
    is_new: "",
    order_no: "",
    type: {
        cancelled: false,
        confirmed: false,
        shipped: false
    }
}


const mockNotifications = [
    {
        description: "Your order for a modern sofa has been submitted successfully.",
        is_new: true,
        order_no: "SO210001",
        type: {
            cancelled: false,
            confirmed: false,
            shipped: false
        }
    },
    {
        description: "Congratulations! Your order for a wooden dining table has been received.",
        is_new: false,
        order_no: "SO210002",
        type: {
            cancelled: false,
            confirmed: true,
            shipped: false
        }
    },
    {
        description: "Your order for a leather recliner chair is being processed.",
        is_new: true,
        order_no: "SO210003",
        type: {
            cancelled: false,
            confirmed: true,
            shipped: false
        }
    },
    {
        description: "We regret to inform you that the order for a coffee table is out of stock.",
        is_new: false,
        order_no: "SO210004",
        type: {
            cancelled: true,
            confirmed: false,
            shipped: false
        }
    },
    {
        description: "Your order for a bedroom set has been confirmed and will be shipped soon.",
        is_new: true,
        order_no: "SO210005",
        type: {
            cancelled: false,
            confirmed: true,
            shipped: true
        }
    },
    {
        description: "Your order for a bookshelf has been confirmed and is ready for shipment.",
        is_new: false,
        order_no: "SO210006",
        type: {
            cancelled: false,
            confirmed: true,
            shipped: true
        }
    },
    {
        description: "We are processing your order for a study desk. Thank you for shopping with us.",
        is_new: true,
        order_no: "SO210007",
        type: {
            cancelled: false,
            confirmed: true,
            shipped: false
        }
    },
    {
        description: "Unfortunately, the order for a floor lamp has been canceled due to stock unavailability.",
        is_new: false,
        order_no: "SO210008",
        type: {
            cancelled: true,
            confirmed: false,
            shipped: false
        }
    },
    {
        description: "Your order for a set of dining chairs is awaiting confirmation from our warehouse.",
        is_new: true,
        order_no: "SO210009",
        type: {
            cancelled: false,
            confirmed: false,
            shipped: false
        }
    },
    {
        description: "Great news! Your order for a TV stand has been shipped and is on its way to you.",
        is_new: false,
        order_no: "SO210010",
        type: {
            cancelled: false,
            confirmed: true,
            shipped: true
        }
    }
];




export { mockProducts, mockNotifications };