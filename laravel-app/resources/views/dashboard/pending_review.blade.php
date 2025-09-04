@extends('layouts.userlayout')


@section('content')


    <div class="row mt-4">
        
        <!-- Categories List -->
        <div class="col-12 mt-4">
            <div class="card">
                <div class="card-header pb-0 p-3">
                    <h6 class="mb-0">Pending Review</h6>
                </div>
                <div class="card-body">
                    <div class="row g-3">
                        <!-- Category Card -->
                        <div class="col-md-3">
                            <div class="card border border-1 shadow-sm h-100">
                                <div class="card-body text-center">
                                    <div class="d-flex">
                                        <img src="" alt="" class="img fluid">
                                        <div>
                                            <h4>Product Name</h4>
                                            <p class="mt-3">Order ID</p>
                                            <p>Delivery date</p>
                                        </div>
                                    </div>
                                    <a href="" class="btn btn-outline-primary btn-sm">Rate this product</a>
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