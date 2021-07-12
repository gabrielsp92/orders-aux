module.exports = ({ originOrderId, origin }) => ({
    "id": "97ab9879-fcc0-4a22-8cfd-425b5c6838fe",
    "schema": "UPDATE_ORDER_EVENT",
    "schemaVersion": 1,
    "source": "connector-ifood",
    "payload": {
        "origin": origin || "IFOOD",
        "originOrderId": originOrderId || "1",
        "merchantId": "1",
        "event": "UPDATE_ORDER",
        "originEvent": "UPDATE_ORDER",
        "timestamp": "2017-05-02T16:01:16.567Z",
        "details": {
            "delivery": {
                "worker": {
                    "name": "Foo Bar",
                    "phoneNumber": "+55 999999999",
                    "instructions": "Deixar pedido na portaria"
                }
            }
        }
    }
})