@extends('layouts.adminlayout')


@section('content')


    <div class="row mt-4">
        <!-- Category Form -->
        <div class="col-md-6 offset-md-3 mb-lg-0 mb-4">
            <div class="card">
                <div class="card-header pb-0 p-3">
                    <div class="d-flex justify-content-between">
                        <h6 class="mb-2">Add New Category</h6>
                    </div>
                </div>
                <div class="card-body">
                    <form action="" method="POST">
                        @csrf
                        <div class="form-group mb-3">
                            <label for="categoryName">Category Name</label>
                            <input type="text" class="form-control" id="categoryName" name="name"
                                placeholder="Enter category name" required>
                        </div>
                        <div class="form-group mb-3">
                            <label for="categoryDescription">Description</label>
                            <textarea class="form-control" id="categoryDescription" name="description" rows="3"
                                placeholder="Short description"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary w-100">Add Category</button>
                    </form>
                </div>
            </div>
        </div>

        <!-- Categories List -->
        <div class="col-12 mt-4">
            <div class="card">
                <div class="card-header pb-0 p-3">
                    <h6 class="mb-0">All Categories</h6>
                </div>
                <div class="card-body">
                    <div class="row g-3">
                        <!-- Category Card -->
                        <div class="col-md-3">
                            <div class="card border border-1 shadow-sm h-100">
                                <div class="card-body text-center">
                                    <h4 class="fw-bold">Electronics</h4>
                                    <p class="text-muted small">Devices, gadgets, and more</p>
                                    <a href="" class="btn btn-outline-primary btn-sm">View
                                        Details</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="card border border-1 shadow-sm h-100">
                                <div class="card-body text-center">
                                    <h4 class="fw-bold">Clothing</h4>
                                    <p class="text-muted small">Men & Women fashion</p>
                                    <a href="" class="btn btn-outline-primary btn-sm">View
                                        Details</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="card border border-1 shadow-sm h-100">
                                <div class="card-body text-center">
                                    <h4 class="fw-bold">Books</h4>
                                    <p class="text-muted small">E-books, novels, learning</p>
                                    <a href="" class="btn btn-outline-primary btn-sm">View
                                        Details</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="card border border-1 shadow-sm h-100">
                                <div class="card-body text-center">
                                    <h4 class="fw-bold">Home & Living</h4>
                                    <p class="text-muted small">Furniture & decor</p>
                                    <a href="" class="btn btn-outline-primary btn-sm">View
                                        Details</a>
                                </div>
                            </div>
                        </div>
                        <!-- End Category Card -->
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        function previewImage(event) {
            const imagePreview = document.getElementById('imagePreview');
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    imagePreview.src = e.target.result;
                    imagePreview.style.display = 'block';
                }
                reader.readAsDataURL(file);
            } else {
                imagePreview.style.display = 'none';
            }
        }
    </script>

@endsection