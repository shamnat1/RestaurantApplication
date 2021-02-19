module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            name: String,
            log: String,
            lat: String,
            address: String
        },
        { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Restaurant = mongoose.model("restaurant", schema);
    return Restaurant;
};