@extends('layouts.adminlayout')


@section('content')

    <div class="row mt-4">
        <!-- Category Details -->
        <div class="col-md-6 offset-md-3 mb-lg-0 mb-4">
            <div class="card">
                <div class="card-header pb-0 p-3">
                    <div class="d-flex justify-content-between">
                        <h6 class="mb-2">Category: Category Name</h6>
                        <a href="" class="btn btn-sm btn-secondary">Back</a>
                    </div>
                </div>
                <div class="card-body">
                    <h5>Number of Products: 12</h5>
                </div>
            </div>
        </div>
    </div>

    <div class="row mt-4">
        <!-- Products under this Category -->
        <div class="col-md-10 offset-md-1">
            <div class="card">
                <div class="card-header pb-0 p-3">
                    <h6 class="mb-2">Products in this Category</h6>
                    @if (session('success'))
                        <script>
                            iziToast.show({
                                title: 'Success',
                                message: "{{ session('success') }}",
                                color: 'green'
                            });
                        </script>
                    @endif
                    @if (session('error'))
                        <script>
                            iziToast.show({
                                title: 'Error',
                                message: "{{ session('error') }}",
                                color: 'red'
                            });
                        </script>
                    @endif
                </div>
                <div class="card-body table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Name</th>
                                <th>Old Price (USD)</th>
                                <th>New Price</th>
                                <th>Image</th>
                                <th>Quantity</th>
                                <th>Status</th>
                                <th>Restock</th>
                                <th>Created At</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse ($products as $product)
                                @php
                                    if ($product->productQuantity < 1) {
                                        $statusStyle = 'text-danger';
                                        $status = 'Out of Stock';
                                    } elseif ($product->productQuantity < 5) {
                                        $statusStyle = 'text-warning';
                                        $status = 'Low Stock';
                                    } else {
                                        $statusStyle = 'text-success';
                                        $status = 'In Stock';
                                    }
                                @endphp
                                <tr>
                                    <td class="text-center">{{ $loop->iteration }}</td>
                                    <td class="text-center">{{ $product->productName }}</td>
                                    <td class="text-center">{{ $product->oldProductPrice }}</td>
                                    <td class="text-center">{{ $product->productPrice }}</td>
                                    <td><img src="{{ asset('product_images/' . $product->productImage) }}"
                                            alt="{{ $product->productName }}" class="img-fluid" style="max-width: 100px;"></td>
                                    <td class="text-center">{{ $product->productQuantity }}</td>
                                    <td class="{{ $statusStyle }}">{{ $status }}</td>
                                    <td class="text-center"><a
                                            href="{{ route('admin.product.restock', ['product_id' => $product->id]) }}"
                                            class="btn btn-primary">Restock</a></td>
                                    <td class="text-center">{{ $product->created_at }}</td>
                                    <td class="text-center">
                                        <a href="{{ route('admin.product.edit', ['product_id' => $product->id]) }}"
                                            class="btn btn-success">Edit</a>
                                        <a href="{{ route('admin.product.delete', ['product_id' => $product->id]) }}"
                                            class="btn btn-danger"
                                            onclick="return confirm('Are you sure you want to delete this product?');">Delete</a>
                                    </td>
                                </tr>
                            @empty
                                <tr>
                                    <td colspan="6" class="text-center">No products found in this category.</td>
                                </tr>
                            @endforelse
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </div>



@endsection