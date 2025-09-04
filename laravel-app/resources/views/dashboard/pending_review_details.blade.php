@extends('layouts.userlayout')


@section('content')
    
  

<div class="row mt-4">
    <!-- Products under this Category -->
    <div class="col-md-10 offset-md-1">
        <div class="card">
            <div class="card-header pb-0 p-3">
                <h6 class="mb-2">Review the product</h6>
            </div> 
        </div>
        <div class="card-body">
            <div class="d-flex">
                <img src="" alt="product img"  width="100px" height="100px">
                <div>
                    <h4>Product Name 1</h4>
                    <p>Order number: #12345</p>
                    <p>Estimated delivery time: 2 days</p>
                </div>
            </div>
            <div class="mt-2">
                <h5>Your Review</h5>
                <form action="" method="POST">
                    @csrf
                    <div class="mb-3">
                        <label for="rating" class="form-label">Rating (1 to 5):</label>
                        <input type="number" class="form-control" id="rating" name="rating" min="1" max="5" required>
                    </div>
                    <div class="mb-3">
                        <label for="review" class="form-label">Review:</label>
                        <textarea class="form-control" id="review" name="review" rows="4" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit Review</button>
                </form>
            </div>
        </div>
    </div>
</div>
   
    

@endsection