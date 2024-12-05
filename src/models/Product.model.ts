import {Table, Column, Model, DataType, DefaultScope, Default} from "sequelize-typescript"

@Table({
    tableName: "Product"
})

class Product extends Model{
    @Column({
        type: DataType.STRING(100)
    })
    name: String 

    @Column({
        type: DataType.FLOAT(6, 2)
    })
    price: number

    @Default(true)
    @Column({
        type: DataType.BOOLEAN
    })
    availability: boolean
}

export default Product