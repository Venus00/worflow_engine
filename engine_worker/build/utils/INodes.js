"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = void 0;
exports.data = {
    nodes: [
        {
            type: 'Request',
            uuid: '0010',
            properties: {
                url: "http://127.0.0.1:3000"
            }
        },
        {
            type: 'Delay',
            uuid: '0009',
            properties: {
                'timeout': 6000
            }
        },
        {
            type: 'Number',
            uuid: '0004'
        },
        {
            type: 'Number',
            uuid: '0005'
        },
        {
            type: 'Number',
            uuid: '0006'
        },
        {
            type: 'Number',
            uuid: '0007'
        },
        {
            type: 'Number',
            uuid: '0008'
        },
        {
            type: 'Add',
            uuid: '0000',
        },
        {
            type: 'Minus',
            uuid: '0001',
        },
        {
            type: 'Add',
            uuid: '0002',
        },
    ],
    connections: [
        ['0009', '0004', '0007', '0000'],
        ['0006', '0009', '0001'],
        ['0007', '0002', '0009'],
        ['0008', '0000', '0010']
    ]
};
