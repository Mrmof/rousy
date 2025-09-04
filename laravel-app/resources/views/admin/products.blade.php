@extends('layouts.adminlayout')


@section('content')
    
  

<div class="row mt-4">
    <!-- Products  -->
    <div class="col-md-6 offset-md-3 mb-lg-0 mb-4">
            <div class="card">
                <div class="card-header pb-0 p-3">
                    <div class="d-flex justify-content-between">
                        <h6 class="mb-2">Add New Product</h6>
                    </div>
                </div>
                <div class="card-body">
                    <form action="{{ route('admin.product.add')}}" method="POST" enctype="multipart/form-data">
                        @csrf
                            @if (session('success'))
                                <script>
                                    iziToast.show({
                                        title: 'Success',
                                        message: "{{ session('success') }}",
                                        color: 'green'
                                    });
                                </script>
                            @endif
                            @error('productName')
                                <script>
                                    iziToast.show({
                                        title: 'Error',
                                        message: "{{ $message }}",
                                        color: 'red'
                                    });
                                </script>
                            @enderror
                        <div class="form-group mb-3">
                            <label for="productName">Product Name</label>
                            <input type="text" class="form-control" id="productName" name="productName"
                                placeholder="Enter product name" required>
                        </div>

                        @error('productImage')
                                <script>
                                    iziToast.show({
                                        title: 'Error',
                                        message: "{{ $message }}",
                                        color: 'red'
                                    });
                                </script>
                            @enderror
                        <div class="form-group mb-3">
                            <label for="productImage">Product Image</label>
                            <input type="file" class="form-control" id="productImage" name="productImage"
                                accept="image/*" required>

                        </div>
                        @error('category')
                                <script>
                                    iziToast.show({
                                        title: 'Error',
                                        message: "{{ $message }}",
                                        color: 'red'
                                    });
                                </script>
                            @enderror
                        <div class="form-group mb-3">
                            <label for="productCategory">Product Category</label>
                            <select class="form-control" id="productCategory" name="category_id" required>
                                <option value="">Select a category</option>
                                @foreach ($categories as $category)
                                    <option value="{{ $category->id }}">{{ $category->category_name }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="form-group mb-3">
                            <label for="productPrice">Product Price</label>
                            <input type="text" class="form-control" id="productPrice" name="productPrice"
                                placeholder="Enter product price" required>
                        </div>
                        @error('productBenefits')
                                <script>
                                    iziToast.show({
                                        title: 'Error',
                                        message: "{{ $message }}",
                                        color: 'red'
                                    });
                                </script>
                            @enderror
                        <div class="form-group mb-3">
                            <label for="productBenefits">Product Benefits</label>
                            <input type="text" class="form-control" id="productBenefits" name="productBenefits"
                                placeholder="Enter product benefits separated by comma" required>
                        </div>
                        @error('productBadges')
                                <script>
                                    iziToast.show({
                                        title: 'Error',
                                        message: "{{ $message }}",
                                        color: 'red'
                                    });
                                </script>
                            @enderror
                        <div class="form-group mb-3">
                            <label for="productBadges">Product Badges</label>
                            <select class="form-control" id="productBadges" name="productBadges" required>
                                <option value="">Select a Badge</option>
                                
                                <option value="bestseller">Bestseller</option>
                                <option value="stem cell">Stem cell</option>
                                <option value="premium">Premium</option>
                            </select>
                            
                        </div>
                        @error('productDescription')
                                <script>
                                    iziToast.show({
                                        title: 'Error',
                                        message: "{{ $message }}",
                                        color: 'red'
                                    });
                                </script>
                            @enderror
                        <div class="form-group mb-3">
                            <label for="productDescription">Description</label>
                            <textarea class="form-control" id="productDescription" name="productDescription" rows="3"
                                placeholder="Short description"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary w-100">Add Product</button>
                    </form>
                </div>
            </div>
        </div>
    <div class="col-md-10 offset-md-1">
        <div class="card">
            <div class="card-header pb-0 p-3">
                <h6 class="mb-2">Products</h6>
            </div>
            <div class="card-body table-responsive">
                    <table class="table table-hover ">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Name</th>
                                <th>New Price</th>
                                <th>Old Price</th>
                                <th>Discount</th>
                                <th>Quantity</th>
                                <th>Description</th>
                                <th>Created At</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse ($products as $product)
                                @php
                                    if ($product->productQuantity < 1) {
                                        $statusStyle = 'text-danger';
                                        $status = 'Out of Stock';
                                    }elseif ($product->productQuantity < 5) {
                                        $statusStyle = 'text-warning';
                                        $status = 'Low Stock';
                                    }else {
                                        $statusStyle = 'text-success';
                                        $status = 'In Stock';
                                    }
                                    $discount = 0;
                                    if ($product->oldProductPrice && $product->oldProductPrice > $product->productPrice) {
                                        $discount = round((($product->oldProductPrice - $product->productPrice) / $product->oldProductPrice) * 100);
                                    }
                                @endphp
                                <tr>
                                    <td class="text-center">{{ $loop->iteration }}</td>
                                    <td class="text-center">{{ $product->productName }}</td>
                                    <td class="text-center">{{ $product->productPrice }}</td>
                                    <td class="text-center">{{ $product->oldProductPrice ?? 'N/A' }}</td>
                                    <td class="text-center">{{$discount}}</td>
                                    <td class="text-center">{{ $product->productQuantity }}</td>
                                    <td class="text-center"> {{ Str::limit($product->productDescription, 20) }}</td>
                                    <td class="text-center">{{ $product->created_at }}</td>
                                    <td class="{{ $statusStyle }}">{{ $status }}</td>
                                </tr>
                            @empty
                                <tr>
                                    <td colspan="7" class="text-center">No products found.</td>
                                </tr>
                            @endforelse
                        </tbody>
                    </table>
                
            </div>
        </div>
    </div>
</div>
   
    

@endsection