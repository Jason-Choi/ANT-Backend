const dbConfig = require("../config/dbConfig.js");

module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("" + dbConfig.TABLE, {
        // id -> statista_index
        statista_index: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            //autoIncrement: true
        },
        title: {
            type: DataTypes.TEXT
        },
        market: {
            type: DataTypes.TEXT
        },
        data: {
            type: DataTypes.TEXT
        },
        topic: {
            type: DataTypes.TEXT
        },
        is_annotated: {
            type: DataTypes.INTEGER
        },
        raw_caption: {
            type: DataTypes.TEXT
        },
        axis_title: {
            type: DataTypes.TEXT
        }
    
    },
    // sequalize table 생성 시 복수형으로 s가 붙는 문제 해결
    {   underscored: true,
        freezeTableName: true,
        //tableName: "corpus_1"
        tableName:"final_dataset",

    });
    
    return Product;
}

