import { receiveItems } from '../../static/js/apps/actions/productList';
import { RECEIVE_ITEMS } from '../../static/js/apps/constants'

describe('actions', () => {
  it('should create an action to receive items', () => {
    const data = [
        {
            "id": 1,
            "imageURL": "http://placehold.it/150/1b21a0/ffffff",
            "name": "product A",
            "type": "",
            "price": 250,
            "currency": "$"
        },
        {
            "id": 2,
            "imageURL": "http://placehold.it/150/bc4125/ffffff",
            "name": "product B",
            "type": "",
            "price": 350,
            "currency": "$"
        },
        {
            "id": 3,
            "imageURL": "http://placehold.it/150/5abc25/ffffff",
            "name": "product C",
            "type": "",
            "price": 200,
            "currency": "$"
        },
        {
            "id": 4,
            "imageURL": "http://placehold.it/150/ebf742/ffffff",
            "name": "product D",
            "type": "",
            "price": 500,
            "currency": "$"
        },
        {
            "id": 5,
            "imageURL": "http://placehold.it/150/d121c8/ffffff",
            "name": "product D",
            "type": "",
            "price": 100,
            "currency": "$"
        }
    ];
    const expectedAction = {
        type: RECEIVE_ITEMS,
        data
    };

    expect(receiveItems(data)).toEqual(expectedAction)
  })
})
