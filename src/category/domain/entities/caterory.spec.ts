import { Category } from "./category"

describe('Category Tests',()  =>{

    test( 'Contructor os category', () =>{
        const category = new Category('Movie');
        expect(category.name).toBe('Movie');
    }

)
})