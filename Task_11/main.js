const api = `https://dummyjson.com/products`;

const mylist = document.getElementById('product-list');

let pagination = {
    limit: 5,
    skip: 0,
    total: null,

    next() {
        this.skip +=this.limit;
    },
    get isEnd() {
        if(this.total == null) return false;
        return this.skip >= this.total;
    }
};

function loadProducts() {
    let url =`${api}?skip=${pagination.skip}&limit=${pagination.limit}`;
    pagination.next();

    fetch(url).then(res => res.json()).then(data =>{
        pagination.total =data.total;
        moreBtn.disabled = pagination.isEnd;

        const products = data.products;

        for( const p of products){
            addProduct(p);
        }
    });
}

function addProduct(product){
    mylist.innerHTML += `<li><div class="card" style="width: 18rem;">
                            <img src="${product.thumbnail}" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                            <p class="card-text">${product.description}</p>
                            <div class="text-center">
                                <a href="#" class="btn btn-success">Buy</a>
                            </div>
                            </div>
                        </div></li>`
}

loadProducts();
moreBtn.onclick = () => {
    loadProducts();
}